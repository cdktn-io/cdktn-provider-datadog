# `integrationDatabricksAccount` Submodule <a name="`integrationDatabricksAccount` Submodule" id="@cdktn/provider-datadog.integrationDatabricksAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationDatabricksAccount <a name="IntegrationDatabricksAccount" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account datadog_integration_databricks_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccount(scope: Construct, id: string, config: IntegrationDatabricksAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig">IntegrationDatabricksAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig">putAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration">putPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig">resetAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled">resetCcmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId">resetDdApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret">resetDdApiKeySecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled">resetDjmClusterPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled">resetDjmEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled">resetDjmGlobalInitScriptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron">resetDoCrawlersCron</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled">resetDoEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName">resetModelServingEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled">resetModelServingMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration">resetPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled">resetScriptGpumEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled">resetScriptLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled">resetServerlessJobsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId">resetSystemTablesSqlWarehouseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled">resetTableLineageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath">resetUcVolumePath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthConfig` <a name="putAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig"></a>

```typescript
public putAuthConfig(value: IntegrationDatabricksAccountAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `putPrivateActionRunnerConfiguration` <a name="putPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration"></a>

```typescript
public putPrivateActionRunnerConfiguration(value: IntegrationDatabricksAccountPrivateActionRunnerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.putPrivateActionRunnerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `resetAuthConfig` <a name="resetAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetAuthConfig"></a>

```typescript
public resetAuthConfig(): void
```

##### `resetCcmEnabled` <a name="resetCcmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetCcmEnabled"></a>

```typescript
public resetCcmEnabled(): void
```

##### `resetDdApiKeyId` <a name="resetDdApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeyId"></a>

```typescript
public resetDdApiKeyId(): void
```

##### `resetDdApiKeySecret` <a name="resetDdApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDdApiKeySecret"></a>

```typescript
public resetDdApiKeySecret(): void
```

##### `resetDjmClusterPolicyEnabled` <a name="resetDjmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmClusterPolicyEnabled"></a>

```typescript
public resetDjmClusterPolicyEnabled(): void
```

##### `resetDjmEnabled` <a name="resetDjmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmEnabled"></a>

```typescript
public resetDjmEnabled(): void
```

##### `resetDjmGlobalInitScriptEnabled` <a name="resetDjmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDjmGlobalInitScriptEnabled"></a>

```typescript
public resetDjmGlobalInitScriptEnabled(): void
```

##### `resetDoCrawlersCron` <a name="resetDoCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoCrawlersCron"></a>

```typescript
public resetDoCrawlersCron(): void
```

##### `resetDoEnabled` <a name="resetDoEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetDoEnabled"></a>

```typescript
public resetDoEnabled(): void
```

##### `resetModelServingEndpointName` <a name="resetModelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingEndpointName"></a>

```typescript
public resetModelServingEndpointName(): void
```

##### `resetModelServingMetricsEnabled` <a name="resetModelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetModelServingMetricsEnabled"></a>

```typescript
public resetModelServingMetricsEnabled(): void
```

##### `resetPrivateActionRunnerConfiguration` <a name="resetPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetPrivateActionRunnerConfiguration"></a>

```typescript
public resetPrivateActionRunnerConfiguration(): void
```

##### `resetScriptGpumEnabled` <a name="resetScriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptGpumEnabled"></a>

```typescript
public resetScriptGpumEnabled(): void
```

##### `resetScriptLogsEnabled` <a name="resetScriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetScriptLogsEnabled"></a>

```typescript
public resetScriptLogsEnabled(): void
```

##### `resetServerlessJobsEnabled` <a name="resetServerlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetServerlessJobsEnabled"></a>

```typescript
public resetServerlessJobsEnabled(): void
```

##### `resetSystemTablesSqlWarehouseId` <a name="resetSystemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetSystemTablesSqlWarehouseId"></a>

```typescript
public resetSystemTablesSqlWarehouseId(): void
```

##### `resetTableLineageEnabled` <a name="resetTableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetTableLineageEnabled"></a>

```typescript
public resetTableLineageEnabled(): void
```

##### `resetUcVolumePath` <a name="resetUcVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.resetUcVolumePath"></a>

```typescript
public resetUcVolumePath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IntegrationDatabricksAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationDatabricksAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationDatabricksAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationDatabricksAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration">privateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput">authConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput">ccmEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput">ddApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput">ddApiKeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput">djmClusterPolicyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput">djmEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput">djmGlobalInitScriptEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput">doCrawlersCronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput">doEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput">modelServingEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput">modelServingMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput">privateActionRunnerConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput">scriptGpumEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput">scriptLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput">serverlessJobsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput">systemTablesSqlWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput">tableLineageEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput">ucVolumePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput">workspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled">ccmEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId">ddApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret">ddApiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled">djmClusterPolicyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled">djmEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled">djmGlobalInitScriptEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron">doCrawlersCron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled">doEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName">modelServingEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled">modelServingMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled">scriptGpumEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled">scriptLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled">serverlessJobsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId">systemTablesSqlWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled">tableLineageEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath">ucVolumePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authConfig`<sup>Required</sup> <a name="authConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfig"></a>

```typescript
public readonly authConfig: IntegrationDatabricksAccountAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference">IntegrationDatabricksAccountAuthConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateActionRunnerConfiguration`<sup>Required</sup> <a name="privateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfiguration"></a>

```typescript
public readonly privateActionRunnerConfiguration: IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference">IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference</a>

---

##### `authConfigInput`<sup>Optional</sup> <a name="authConfigInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.authConfigInput"></a>

```typescript
public readonly authConfigInput: IResolvable | IntegrationDatabricksAccountAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---

##### `ccmEnabledInput`<sup>Optional</sup> <a name="ccmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabledInput"></a>

```typescript
public readonly ccmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ddApiKeyIdInput`<sup>Optional</sup> <a name="ddApiKeyIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyIdInput"></a>

```typescript
public readonly ddApiKeyIdInput: string;
```

- *Type:* string

---

##### `ddApiKeySecretInput`<sup>Optional</sup> <a name="ddApiKeySecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecretInput"></a>

```typescript
public readonly ddApiKeySecretInput: string;
```

- *Type:* string

---

##### `djmClusterPolicyEnabledInput`<sup>Optional</sup> <a name="djmClusterPolicyEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabledInput"></a>

```typescript
public readonly djmClusterPolicyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `djmEnabledInput`<sup>Optional</sup> <a name="djmEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabledInput"></a>

```typescript
public readonly djmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `djmGlobalInitScriptEnabledInput`<sup>Optional</sup> <a name="djmGlobalInitScriptEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabledInput"></a>

```typescript
public readonly djmGlobalInitScriptEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doCrawlersCronInput`<sup>Optional</sup> <a name="doCrawlersCronInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCronInput"></a>

```typescript
public readonly doCrawlersCronInput: string;
```

- *Type:* string

---

##### `doEnabledInput`<sup>Optional</sup> <a name="doEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabledInput"></a>

```typescript
public readonly doEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modelServingEndpointNameInput`<sup>Optional</sup> <a name="modelServingEndpointNameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointNameInput"></a>

```typescript
public readonly modelServingEndpointNameInput: string;
```

- *Type:* string

---

##### `modelServingMetricsEnabledInput`<sup>Optional</sup> <a name="modelServingMetricsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabledInput"></a>

```typescript
public readonly modelServingMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateActionRunnerConfigurationInput`<sup>Optional</sup> <a name="privateActionRunnerConfigurationInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.privateActionRunnerConfigurationInput"></a>

```typescript
public readonly privateActionRunnerConfigurationInput: IResolvable | IntegrationDatabricksAccountPrivateActionRunnerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---

##### `scriptGpumEnabledInput`<sup>Optional</sup> <a name="scriptGpumEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabledInput"></a>

```typescript
public readonly scriptGpumEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scriptLogsEnabledInput`<sup>Optional</sup> <a name="scriptLogsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabledInput"></a>

```typescript
public readonly scriptLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serverlessJobsEnabledInput`<sup>Optional</sup> <a name="serverlessJobsEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabledInput"></a>

```typescript
public readonly serverlessJobsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `systemTablesSqlWarehouseIdInput`<sup>Optional</sup> <a name="systemTablesSqlWarehouseIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseIdInput"></a>

```typescript
public readonly systemTablesSqlWarehouseIdInput: string;
```

- *Type:* string

---

##### `tableLineageEnabledInput`<sup>Optional</sup> <a name="tableLineageEnabledInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabledInput"></a>

```typescript
public readonly tableLineageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ucVolumePathInput`<sup>Optional</sup> <a name="ucVolumePathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePathInput"></a>

```typescript
public readonly ucVolumePathInput: string;
```

- *Type:* string

---

##### `workspaceUrlInput`<sup>Optional</sup> <a name="workspaceUrlInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrlInput"></a>

```typescript
public readonly workspaceUrlInput: string;
```

- *Type:* string

---

##### `ccmEnabled`<sup>Required</sup> <a name="ccmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ccmEnabled"></a>

```typescript
public readonly ccmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ddApiKeyId`<sup>Required</sup> <a name="ddApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeyId"></a>

```typescript
public readonly ddApiKeyId: string;
```

- *Type:* string

---

##### `ddApiKeySecret`<sup>Required</sup> <a name="ddApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ddApiKeySecret"></a>

```typescript
public readonly ddApiKeySecret: string;
```

- *Type:* string

---

##### `djmClusterPolicyEnabled`<sup>Required</sup> <a name="djmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmClusterPolicyEnabled"></a>

```typescript
public readonly djmClusterPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `djmEnabled`<sup>Required</sup> <a name="djmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmEnabled"></a>

```typescript
public readonly djmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `djmGlobalInitScriptEnabled`<sup>Required</sup> <a name="djmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.djmGlobalInitScriptEnabled"></a>

```typescript
public readonly djmGlobalInitScriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `doCrawlersCron`<sup>Required</sup> <a name="doCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doCrawlersCron"></a>

```typescript
public readonly doCrawlersCron: string;
```

- *Type:* string

---

##### `doEnabled`<sup>Required</sup> <a name="doEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.doEnabled"></a>

```typescript
public readonly doEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modelServingEndpointName`<sup>Required</sup> <a name="modelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingEndpointName"></a>

```typescript
public readonly modelServingEndpointName: string;
```

- *Type:* string

---

##### `modelServingMetricsEnabled`<sup>Required</sup> <a name="modelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.modelServingMetricsEnabled"></a>

```typescript
public readonly modelServingMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scriptGpumEnabled`<sup>Required</sup> <a name="scriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptGpumEnabled"></a>

```typescript
public readonly scriptGpumEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `scriptLogsEnabled`<sup>Required</sup> <a name="scriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.scriptLogsEnabled"></a>

```typescript
public readonly scriptLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serverlessJobsEnabled`<sup>Required</sup> <a name="serverlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.serverlessJobsEnabled"></a>

```typescript
public readonly serverlessJobsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `systemTablesSqlWarehouseId`<sup>Required</sup> <a name="systemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.systemTablesSqlWarehouseId"></a>

```typescript
public readonly systemTablesSqlWarehouseId: string;
```

- *Type:* string

---

##### `tableLineageEnabled`<sup>Required</sup> <a name="tableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tableLineageEnabled"></a>

```typescript
public readonly tableLineageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ucVolumePath`<sup>Required</sup> <a name="ucVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.ucVolumePath"></a>

```typescript
public readonly ucVolumePath: string;
```

- *Type:* string

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationDatabricksAccountAuthConfig <a name="IntegrationDatabricksAccountAuthConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountAuthConfig: integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | oauth block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat">pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | pat block. |

---

##### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.oauth"></a>

```typescript
public readonly oauth: IntegrationDatabricksAccountAuthConfigOauth;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#oauth IntegrationDatabricksAccount#oauth}

---

##### `pat`<sup>Optional</sup> <a name="pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig.property.pat"></a>

```typescript
public readonly pat: IntegrationDatabricksAccountAuthConfigPat;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

pat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#pat IntegrationDatabricksAccount#pat}

---

### IntegrationDatabricksAccountAuthConfigOauth <a name="IntegrationDatabricksAccountAuthConfigOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountAuthConfigOauth: integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId">clientId</a></code> | <code>string</code> | OAuth Client ID for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret">clientSecret</a></code> | <code>string</code> | OAuth Client Secret for the Databricks service principal. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner. |

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Azure Tenant ID (UUID format) for authenticating via Microsoft Entra ID. Only set when using Azure Entra ID OAuth.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#azure_tenant_id IntegrationDatabricksAccount#azure_tenant_id}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth Client ID for the Databricks service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_id IntegrationDatabricksAccount#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

OAuth Client Secret for the Databricks service principal.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#client_secret IntegrationDatabricksAccount#client_secret}

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

Databricks Account ID (UUID format). Found in your Databricks profile in the upper-right corner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#databricks_account_id IntegrationDatabricksAccount#databricks_account_id}

---

### IntegrationDatabricksAccountAuthConfigPat <a name="IntegrationDatabricksAccountAuthConfigPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountAuthConfigPat: integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token">token</a></code> | <code>string</code> | Databricks Personal Access Token (PAT). |

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Databricks Personal Access Token (PAT).

Generate from Settings > Developer > Access tokens. This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#token IntegrationDatabricksAccount#token}

---

### IntegrationDatabricksAccountConfig <a name="IntegrationDatabricksAccountConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountConfig: integrationDatabricksAccount.IntegrationDatabricksAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name">name</a></code> | <code>string</code> | A human-readable name for the account. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com). |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig">authConfig</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | auth_config block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled">ccmEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId">ddApiKeyId</a></code> | <code>string</code> | Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret">ddApiKeySecret</a></code> | <code>string</code> | Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled">djmClusterPolicyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled">djmEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled">djmGlobalInitScriptEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When enabled, Datadog installs and manages the Agent with a global init script in the workspace. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron">doCrawlersCron</a></code> | <code>string</code> | Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled">doEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName">modelServingEndpointName</a></code> | <code>string</code> | Name of the Databricks model serving endpoint to monitor. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled">modelServingMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration">privateActionRunnerConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | private_action_runner_configuration block. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled">scriptGpumEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled">scriptLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled">serverlessJobsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId">systemTablesSqlWarehouseId</a></code> | <code>string</code> | SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled">tableLineageEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable table lineage tracking for Databricks tables. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath">ucVolumePath</a></code> | <code>string</code> | Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#name IntegrationDatabricksAccount#name}

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

The URL of your Databricks workspace (e.g., https://your-workspace.cloud.databricks.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#workspace_url IntegrationDatabricksAccount#workspace_url}

---

##### `authConfig`<sup>Optional</sup> <a name="authConfig" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.authConfig"></a>

```typescript
public readonly authConfig: IntegrationDatabricksAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#auth_config IntegrationDatabricksAccount#auth_config}

---

##### `ccmEnabled`<sup>Optional</sup> <a name="ccmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ccmEnabled"></a>

```typescript
public readonly ccmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable Cloud Cost Management to collect cost data from Databricks System Tables. Requires `system_tables_sql_warehouse_id`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#ccm_enabled IntegrationDatabricksAccount#ccm_enabled}

---

##### `ddApiKeyId`<sup>Optional</sup> <a name="ddApiKeyId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeyId"></a>

```typescript
public readonly ddApiKeyId: string;
```

- *Type:* string

Datadog API Key ID used for the Data Jobs Monitoring init script when managed by Datadog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_id IntegrationDatabricksAccount#dd_api_key_id}

---

##### `ddApiKeySecret`<sup>Optional</sup> <a name="ddApiKeySecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ddApiKeySecret"></a>

```typescript
public readonly ddApiKeySecret: string;
```

- *Type:* string

Datadog API Key value (not ID) used for the Data Jobs Monitoring init script when managed by Datadog.

This value is write-only; changes made outside of Terraform will not be drift-detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#dd_api_key_secret IntegrationDatabricksAccount#dd_api_key_secret}

---

##### `djmClusterPolicyEnabled`<sup>Optional</sup> <a name="djmClusterPolicyEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmClusterPolicyEnabled"></a>

```typescript
public readonly djmClusterPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When enabled, Datadog installs and manages the Agent using a cluster policy and Unity Catalog Volume.

Requires a Unity Catalog-enabled workspace with DBR 13.3 LTS+ and `uc_volume_path`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_cluster_policy_enabled IntegrationDatabricksAccount#djm_cluster_policy_enabled}

---

##### `djmEnabled`<sup>Optional</sup> <a name="djmEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmEnabled"></a>

```typescript
public readonly djmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable Data Jobs Monitoring for this workspace. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_enabled IntegrationDatabricksAccount#djm_enabled}

---

##### `djmGlobalInitScriptEnabled`<sup>Optional</sup> <a name="djmGlobalInitScriptEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.djmGlobalInitScriptEnabled"></a>

```typescript
public readonly djmGlobalInitScriptEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When enabled, Datadog installs and manages the Agent with a global init script in the workspace.

Installation can take up to 15 minutes. Requires Workspace Admin permissions. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#djm_global_init_script_enabled IntegrationDatabricksAccount#djm_global_init_script_enabled}

---

##### `doCrawlersCron`<sup>Optional</sup> <a name="doCrawlersCron" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doCrawlersCron"></a>

```typescript
public readonly doCrawlersCron: string;
```

- *Type:* string

Cron schedule controlling how often Datadog crawls the Databricks warehouse for metadata.

Defaults to hourly. Defaults to `"0 * * * *"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_crawlers_cron IntegrationDatabricksAccount#do_crawlers_cron}

---

##### `doEnabled`<sup>Optional</sup> <a name="doEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.doEnabled"></a>

```typescript
public readonly doEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable Data Observability to collect data for viewing in Datadog Data Observability. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#do_enabled IntegrationDatabricksAccount#do_enabled}

---

##### `modelServingEndpointName`<sup>Optional</sup> <a name="modelServingEndpointName" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingEndpointName"></a>

```typescript
public readonly modelServingEndpointName: string;
```

- *Type:* string

Name of the Databricks model serving endpoint to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_endpoint_name IntegrationDatabricksAccount#model_serving_endpoint_name}

---

##### `modelServingMetricsEnabled`<sup>Optional</sup> <a name="modelServingMetricsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.modelServingMetricsEnabled"></a>

```typescript
public readonly modelServingMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Retrieve health and usage metrics from Databricks model serving endpoints. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#model_serving_metrics_enabled IntegrationDatabricksAccount#model_serving_metrics_enabled}

---

##### `privateActionRunnerConfiguration`<sup>Optional</sup> <a name="privateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.privateActionRunnerConfiguration"></a>

```typescript
public readonly privateActionRunnerConfiguration: IntegrationDatabricksAccountPrivateActionRunnerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

private_action_runner_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#private_action_runner_configuration IntegrationDatabricksAccount#private_action_runner_configuration}

---

##### `scriptGpumEnabled`<sup>Optional</sup> <a name="scriptGpumEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptGpumEnabled"></a>

```typescript
public readonly scriptGpumEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Collect GPU metrics from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_gpum_enabled IntegrationDatabricksAccount#script_gpum_enabled}

---

##### `scriptLogsEnabled`<sup>Optional</sup> <a name="scriptLogsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.scriptLogsEnabled"></a>

```typescript
public readonly scriptLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Collect driver and worker logs from Databricks clusters when using a Datadog-managed init script. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#script_logs_enabled IntegrationDatabricksAccount#script_logs_enabled}

---

##### `serverlessJobsEnabled`<sup>Optional</sup> <a name="serverlessJobsEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.serverlessJobsEnabled"></a>

```typescript
public readonly serverlessJobsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Serverless opt-in for Data Jobs Monitoring. Defaults to true. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#serverless_jobs_enabled IntegrationDatabricksAccount#serverless_jobs_enabled}

---

##### `systemTablesSqlWarehouseId`<sup>Optional</sup> <a name="systemTablesSqlWarehouseId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.systemTablesSqlWarehouseId"></a>

```typescript
public readonly systemTablesSqlWarehouseId: string;
```

- *Type:* string

SQL Warehouse ID for querying Databricks System Tables. Required for Cloud Cost Management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#system_tables_sql_warehouse_id IntegrationDatabricksAccount#system_tables_sql_warehouse_id}

---

##### `tableLineageEnabled`<sup>Optional</sup> <a name="tableLineageEnabled" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.tableLineageEnabled"></a>

```typescript
public readonly tableLineageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable table lineage tracking for Databricks tables. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#table_lineage_enabled IntegrationDatabricksAccount#table_lineage_enabled}

---

##### `ucVolumePath`<sup>Optional</sup> <a name="ucVolumePath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountConfig.property.ucVolumePath"></a>

```typescript
public readonly ucVolumePath: string;
```

- *Type:* string

Unity Catalog volume path in `catalog.schema.volume` format where the Datadog init script will be stored (e.g. `main.default.datadog_volume`). Required when `djm_cluster_policy_enabled` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#uc_volume_path IntegrationDatabricksAccount#uc_volume_path}

---

### IntegrationDatabricksAccountPrivateActionRunnerConfiguration <a name="IntegrationDatabricksAccountPrivateActionRunnerConfiguration" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

const integrationDatabricksAccountPrivateActionRunnerConfiguration: integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId">connectionId</a></code> | <code>string</code> | Private Action Runner connection ID. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath">secretPath</a></code> | <code>string</code> | Path to the stored secret holding Databricks credentials inside the Private Action Runner. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid">userUuid</a></code> | <code>string</code> | Service Account UUID used to execute Private Action Runner actions. |

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Private Action Runner connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#connection_id IntegrationDatabricksAccount#connection_id}

---

##### `secretPath`<sup>Optional</sup> <a name="secretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.secretPath"></a>

```typescript
public readonly secretPath: string;
```

- *Type:* string

Path to the stored secret holding Databricks credentials inside the Private Action Runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#secret_path IntegrationDatabricksAccount#secret_path}

---

##### `userUuid`<sup>Optional</sup> <a name="userUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration.property.userUuid"></a>

```typescript
public readonly userUuid: string;
```

- *Type:* string

Service Account UUID used to execute Private Action Runner actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_databricks_account#user_uuid IntegrationDatabricksAccount#user_uuid}

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationDatabricksAccountAuthConfigOauthOutputReference <a name="IntegrationDatabricksAccountAuthConfigOauthOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId">resetDatabricksAccountId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetDatabricksAccountId` <a name="resetDatabricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.resetDatabricksAccountId"></a>

```typescript
public resetDatabricksAccountId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput">databricksAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `databricksAccountIdInput`<sup>Optional</sup> <a name="databricksAccountIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountIdInput"></a>

```typescript
public readonly databricksAccountIdInput: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountAuthConfigOauth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---


### IntegrationDatabricksAccountAuthConfigOutputReference <a name="IntegrationDatabricksAccountAuthConfigOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth">putOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat">putPat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth">resetOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat">resetPat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth` <a name="putOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth"></a>

```typescript
public putOauth(value: IntegrationDatabricksAccountAuthConfigOauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `putPat` <a name="putPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat"></a>

```typescript
public putPat(value: IntegrationDatabricksAccountAuthConfigPat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.putPat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `resetOauth` <a name="resetOauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetOauth"></a>

```typescript
public resetOauth(): void
```

##### `resetPat` <a name="resetPat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.resetPat"></a>

```typescript
public resetPat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat">pat</a></code> | <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput">oauthInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput">patInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauth"></a>

```typescript
public readonly oauth: IntegrationDatabricksAccountAuthConfigOauthOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauthOutputReference">IntegrationDatabricksAccountAuthConfigOauthOutputReference</a>

---

##### `pat`<sup>Required</sup> <a name="pat" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.pat"></a>

```typescript
public readonly pat: IntegrationDatabricksAccountAuthConfigPatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference">IntegrationDatabricksAccountAuthConfigPatOutputReference</a>

---

##### `oauthInput`<sup>Optional</sup> <a name="oauthInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.oauthInput"></a>

```typescript
public readonly oauthInput: IResolvable | IntegrationDatabricksAccountAuthConfigOauth;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOauth">IntegrationDatabricksAccountAuthConfigOauth</a>

---

##### `patInput`<sup>Optional</sup> <a name="patInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.patInput"></a>

```typescript
public readonly patInput: IResolvable | IntegrationDatabricksAccountAuthConfigPat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfig">IntegrationDatabricksAccountAuthConfig</a>

---


### IntegrationDatabricksAccountAuthConfigPatOutputReference <a name="IntegrationDatabricksAccountAuthConfigPatOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToken` <a name="resetToken" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.resetToken"></a>

```typescript
public resetToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountAuthConfigPat;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountAuthConfigPat">IntegrationDatabricksAccountAuthConfigPat</a>

---


### IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference <a name="IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer"></a>

```typescript
import { integrationDatabricksAccount } from '@cdktn/provider-datadog'

new integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath">resetSecretPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid">resetUserUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetSecretPath` <a name="resetSecretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetSecretPath"></a>

```typescript
public resetSecretPath(): void
```

##### `resetUserUuid` <a name="resetUserUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.resetUserUuid"></a>

```typescript
public resetUserUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput">secretPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput">userUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath">secretPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid">userUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `secretPathInput`<sup>Optional</sup> <a name="secretPathInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPathInput"></a>

```typescript
public readonly secretPathInput: string;
```

- *Type:* string

---

##### `userUuidInput`<sup>Optional</sup> <a name="userUuidInput" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuidInput"></a>

```typescript
public readonly userUuidInput: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `secretPath`<sup>Required</sup> <a name="secretPath" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.secretPath"></a>

```typescript
public readonly secretPath: string;
```

- *Type:* string

---

##### `userUuid`<sup>Required</sup> <a name="userUuid" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.userUuid"></a>

```typescript
public readonly userUuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationDatabricksAccountPrivateActionRunnerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.integrationDatabricksAccount.IntegrationDatabricksAccountPrivateActionRunnerConfiguration">IntegrationDatabricksAccountPrivateActionRunnerConfiguration</a>

---



