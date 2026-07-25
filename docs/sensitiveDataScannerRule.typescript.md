# `sensitiveDataScannerRule` Submodule <a name="`sensitiveDataScannerRule` Submodule" id="@cdktn/provider-datadog.sensitiveDataScannerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SensitiveDataScannerRule <a name="SensitiveDataScannerRule" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule datadog_sensitive_data_scanner_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

new sensitiveDataScannerRule.SensitiveDataScannerRule(scope: Construct, id: string, config: SensitiveDataScannerRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig">SensitiveDataScannerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig">SensitiveDataScannerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putIncludedKeywordConfiguration">putIncludedKeywordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putSuppressions">putSuppressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement">putTextReplacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetExcludedNamespaces">resetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIncludedKeywordConfiguration">resetIncludedKeywordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetNamespaces">resetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetStandardPatternId">resetStandardPatternId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetSuppressions">resetSuppressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTextReplacement">resetTextReplacement</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIncludedKeywordConfiguration` <a name="putIncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putIncludedKeywordConfiguration"></a>

```typescript
public putIncludedKeywordConfiguration(value: SensitiveDataScannerRuleIncludedKeywordConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putIncludedKeywordConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

---

##### `putSuppressions` <a name="putSuppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putSuppressions"></a>

```typescript
public putSuppressions(value: SensitiveDataScannerRuleSuppressions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putSuppressions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

---

##### `putTextReplacement` <a name="putTextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement"></a>

```typescript
public putTextReplacement(value: SensitiveDataScannerRuleTextReplacement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.putTextReplacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExcludedNamespaces` <a name="resetExcludedNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetExcludedNamespaces"></a>

```typescript
public resetExcludedNamespaces(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludedKeywordConfiguration` <a name="resetIncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIncludedKeywordConfiguration"></a>

```typescript
public resetIncludedKeywordConfiguration(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetNamespaces"></a>

```typescript
public resetNamespaces(): void
```

##### `resetPattern` <a name="resetPattern" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetStandardPatternId` <a name="resetStandardPatternId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetStandardPatternId"></a>

```typescript
public resetStandardPatternId(): void
```

##### `resetSuppressions` <a name="resetSuppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetSuppressions"></a>

```typescript
public resetSuppressions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTextReplacement` <a name="resetTextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.resetTextReplacement"></a>

```typescript
public resetTextReplacement(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SensitiveDataScannerRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SensitiveDataScannerRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SensitiveDataScannerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SensitiveDataScannerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SensitiveDataScannerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfiguration">includedKeywordConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference">SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressions">suppressions</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference">SensitiveDataScannerRuleSuppressionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacement">textReplacement</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference">SensitiveDataScannerRuleTextReplacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespacesInput">excludedNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfigurationInput">includedKeywordConfigurationInput</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespacesInput">namespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternIdInput">standardPatternIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressionsInput">suppressionsInput</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacementInput">textReplacementInput</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespaces">excludedNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespaces">namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternId">standardPatternId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `includedKeywordConfiguration`<sup>Required</sup> <a name="includedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfiguration"></a>

```typescript
public readonly includedKeywordConfiguration: SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference">SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference</a>

---

##### `suppressions`<sup>Required</sup> <a name="suppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressions"></a>

```typescript
public readonly suppressions: SensitiveDataScannerRuleSuppressionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference">SensitiveDataScannerRuleSuppressionsOutputReference</a>

---

##### `textReplacement`<sup>Required</sup> <a name="textReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacement"></a>

```typescript
public readonly textReplacement: SensitiveDataScannerRuleTextReplacementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference">SensitiveDataScannerRuleTextReplacementOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `excludedNamespacesInput`<sup>Optional</sup> <a name="excludedNamespacesInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespacesInput"></a>

```typescript
public readonly excludedNamespacesInput: string[];
```

- *Type:* string[]

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includedKeywordConfigurationInput`<sup>Optional</sup> <a name="includedKeywordConfigurationInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.includedKeywordConfigurationInput"></a>

```typescript
public readonly includedKeywordConfigurationInput: SensitiveDataScannerRuleIncludedKeywordConfiguration;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: string[];
```

- *Type:* string[]

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `standardPatternIdInput`<sup>Optional</sup> <a name="standardPatternIdInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternIdInput"></a>

```typescript
public readonly standardPatternIdInput: string;
```

- *Type:* string

---

##### `suppressionsInput`<sup>Optional</sup> <a name="suppressionsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.suppressionsInput"></a>

```typescript
public readonly suppressionsInput: SensitiveDataScannerRuleSuppressions;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `textReplacementInput`<sup>Optional</sup> <a name="textReplacementInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.textReplacementInput"></a>

```typescript
public readonly textReplacementInput: SensitiveDataScannerRuleTextReplacement;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `excludedNamespaces`<sup>Required</sup> <a name="excludedNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.excludedNamespaces"></a>

```typescript
public readonly excludedNamespaces: string[];
```

- *Type:* string[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `standardPatternId`<sup>Required</sup> <a name="standardPatternId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.standardPatternId"></a>

```typescript
public readonly standardPatternId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SensitiveDataScannerRuleConfig <a name="SensitiveDataScannerRuleConfig" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

const sensitiveDataScannerRuleConfig: sensitiveDataScannerRule.SensitiveDataScannerRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.groupId">groupId</a></code> | <code>string</code> | Id of the scanning group the rule belongs to. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.description">description</a></code> | <code>string</code> | Description of the rule. Computed when `standard_pattern_id` is set and this field is omitted. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.excludedNamespaces">excludedNamespaces</a></code> | <code>string[]</code> | Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#id SensitiveDataScannerRule#id}. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.includedKeywordConfiguration">includedKeywordConfiguration</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a></code> | included_keyword_configuration block. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not the rule is enabled. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.name">name</a></code> | <code>string</code> | Name of the rule. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.namespaces">namespaces</a></code> | <code>string[]</code> | Attributes included in the scan. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.pattern">pattern</a></code> | <code>string</code> | Not included if there is a relationship to a standard pattern. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.priority">priority</a></code> | <code>number</code> | Priority level of the rule (optional). |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.standardPatternId">standardPatternId</a></code> | <code>string</code> | Id of the standard pattern the rule refers to. If provided, then pattern must not be provided. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.suppressions">suppressions</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a></code> | suppressions block. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.tags">tags</a></code> | <code>string[]</code> | List of tags. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.textReplacement">textReplacement</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | text_replacement block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Id of the scanning group the rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#group_id SensitiveDataScannerRule#group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the rule. Computed when `standard_pattern_id` is set and this field is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#description SensitiveDataScannerRule#description}

---

##### `excludedNamespaces`<sup>Optional</sup> <a name="excludedNamespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.excludedNamespaces"></a>

```typescript
public readonly excludedNamespaces: string[];
```

- *Type:* string[]

Attributes excluded from the scan. If namespaces is provided, it has to be a sub-path of the namespaces array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#excluded_namespaces SensitiveDataScannerRule#excluded_namespaces}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#id SensitiveDataScannerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includedKeywordConfiguration`<sup>Optional</sup> <a name="includedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.includedKeywordConfiguration"></a>

```typescript
public readonly includedKeywordConfiguration: SensitiveDataScannerRuleIncludedKeywordConfiguration;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

included_keyword_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#included_keyword_configuration SensitiveDataScannerRule#included_keyword_configuration}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not the rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#is_enabled SensitiveDataScannerRule#is_enabled}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#name SensitiveDataScannerRule#name}

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.namespaces"></a>

```typescript
public readonly namespaces: string[];
```

- *Type:* string[]

Attributes included in the scan.

If namespaces is empty or missing, all attributes except excluded_namespaces are scanned. If both are missing the whole event is scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#namespaces SensitiveDataScannerRule#namespaces}

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Not included if there is a relationship to a standard pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#pattern SensitiveDataScannerRule#pattern}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Priority level of the rule (optional).

Used to order sensitive data discovered in the sds summary page. It must be between 1 and 5 (1 being the most important).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#priority SensitiveDataScannerRule#priority}

---

##### `standardPatternId`<sup>Optional</sup> <a name="standardPatternId" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.standardPatternId"></a>

```typescript
public readonly standardPatternId: string;
```

- *Type:* string

Id of the standard pattern the rule refers to. If provided, then pattern must not be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#standard_pattern_id SensitiveDataScannerRule#standard_pattern_id}

---

##### `suppressions`<sup>Optional</sup> <a name="suppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.suppressions"></a>

```typescript
public readonly suppressions: SensitiveDataScannerRuleSuppressions;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

suppressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#suppressions SensitiveDataScannerRule#suppressions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#tags SensitiveDataScannerRule#tags}

---

##### `textReplacement`<sup>Optional</sup> <a name="textReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleConfig.property.textReplacement"></a>

```typescript
public readonly textReplacement: SensitiveDataScannerRuleTextReplacement;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

text_replacement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#text_replacement SensitiveDataScannerRule#text_replacement}

---

### SensitiveDataScannerRuleIncludedKeywordConfiguration <a name="SensitiveDataScannerRuleIncludedKeywordConfiguration" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

const sensitiveDataScannerRuleIncludedKeywordConfiguration: sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.characterCount">characterCount</a></code> | <code>number</code> | Number of characters before the match to find a keyword validating the match. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.keywords">keywords</a></code> | <code>string[]</code> | Keyword list that is checked during scanning in order to validate a match. |

---

##### `characterCount`<sup>Required</sup> <a name="characterCount" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.characterCount"></a>

```typescript
public readonly characterCount: number;
```

- *Type:* number

Number of characters before the match to find a keyword validating the match.

It must be between 1 and 50 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#character_count SensitiveDataScannerRule#character_count}

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keyword list that is checked during scanning in order to validate a match.

The number of keywords in the list must be lower than or equal to 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#keywords SensitiveDataScannerRule#keywords}

---

### SensitiveDataScannerRuleSuppressions <a name="SensitiveDataScannerRuleSuppressions" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

const sensitiveDataScannerRuleSuppressions: sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.endsWith">endsWith</a></code> | <code>string[]</code> | Any match that ends with a value in this list will be suppressed. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.exactMatch">exactMatch</a></code> | <code>string[]</code> | Any match that appears in this list will be suppressed. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.startsWith">startsWith</a></code> | <code>string[]</code> | Any match that starts with a value in this list will be suppressed. |

---

##### `endsWith`<sup>Optional</sup> <a name="endsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

Any match that ends with a value in this list will be suppressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#ends_with SensitiveDataScannerRule#ends_with}

---

##### `exactMatch`<sup>Optional</sup> <a name="exactMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.exactMatch"></a>

```typescript
public readonly exactMatch: string[];
```

- *Type:* string[]

Any match that appears in this list will be suppressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#exact_match SensitiveDataScannerRule#exact_match}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

Any match that starts with a value in this list will be suppressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#starts_with SensitiveDataScannerRule#starts_with}

---

### SensitiveDataScannerRuleTextReplacement <a name="SensitiveDataScannerRuleTextReplacement" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

const sensitiveDataScannerRuleTextReplacement: sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.type">type</a></code> | <code>string</code> | Type of the replacement text. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.numberOfChars">numberOfChars</a></code> | <code>number</code> | Required if type == 'partial_replacement_from_beginning' or 'partial_replacement_from_end'. It must be > 0. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.replacementString">replacementString</a></code> | <code>string</code> | Required if type == 'replacement_string'. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.shouldSaveMatch">shouldSaveMatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Only valid when type == `replacement_string`. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the replacement text.

None means no replacement. hash means the data will be stubbed. replacement_string means that one can chose a text to replace the data. partial_replacement_from_beginning allows a user to partially replace the data from the beginning, and partial_replacement_from_end on the other hand, allows to replace data from the end. Valid values are `none`, `hash`, `replacement_string`, `partial_replacement_from_beginning`, `partial_replacement_from_end`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#type SensitiveDataScannerRule#type}

---

##### `numberOfChars`<sup>Optional</sup> <a name="numberOfChars" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.numberOfChars"></a>

```typescript
public readonly numberOfChars: number;
```

- *Type:* number

Required if type == 'partial_replacement_from_beginning' or 'partial_replacement_from_end'. It must be > 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#number_of_chars SensitiveDataScannerRule#number_of_chars}

---

##### `replacementString`<sup>Optional</sup> <a name="replacementString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.replacementString"></a>

```typescript
public readonly replacementString: string;
```

- *Type:* string

Required if type == 'replacement_string'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#replacement_string SensitiveDataScannerRule#replacement_string}

---

##### `shouldSaveMatch`<sup>Optional</sup> <a name="shouldSaveMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement.property.shouldSaveMatch"></a>

```typescript
public readonly shouldSaveMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Only valid when type == `replacement_string`.

When enabled, matches can be unmasked in logs by users with ‘Data Scanner Unmask’ permission. As a security best practice, avoid masking for highly-sensitive, long-lived data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/sensitive_data_scanner_rule#should_save_match SensitiveDataScannerRule#should_save_match}

---

## Classes <a name="Classes" id="Classes"></a>

### SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference <a name="SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

new sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCountInput">characterCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywordsInput">keywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCount">characterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywords">keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `characterCountInput`<sup>Optional</sup> <a name="characterCountInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCountInput"></a>

```typescript
public readonly characterCountInput: number;
```

- *Type:* number

---

##### `keywordsInput`<sup>Optional</sup> <a name="keywordsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywordsInput"></a>

```typescript
public readonly keywordsInput: string[];
```

- *Type:* string[]

---

##### `characterCount`<sup>Required</sup> <a name="characterCount" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.characterCount"></a>

```typescript
public readonly characterCount: number;
```

- *Type:* number

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SensitiveDataScannerRuleIncludedKeywordConfiguration;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleIncludedKeywordConfiguration">SensitiveDataScannerRuleIncludedKeywordConfiguration</a>

---


### SensitiveDataScannerRuleSuppressionsOutputReference <a name="SensitiveDataScannerRuleSuppressionsOutputReference" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

new sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetEndsWith">resetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetExactMatch">resetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetStartsWith">resetStartsWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndsWith` <a name="resetEndsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetEndsWith"></a>

```typescript
public resetEndsWith(): void
```

##### `resetExactMatch` <a name="resetExactMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetExactMatch"></a>

```typescript
public resetExactMatch(): void
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.resetStartsWith"></a>

```typescript
public resetStartsWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWithInput">endsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatchInput">exactMatchInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWithInput">startsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWith">endsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatch">exactMatch</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWith">startsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsWithInput`<sup>Optional</sup> <a name="endsWithInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWithInput"></a>

```typescript
public readonly endsWithInput: string[];
```

- *Type:* string[]

---

##### `exactMatchInput`<sup>Optional</sup> <a name="exactMatchInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatchInput"></a>

```typescript
public readonly exactMatchInput: string[];
```

- *Type:* string[]

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWithInput"></a>

```typescript
public readonly startsWithInput: string[];
```

- *Type:* string[]

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

---

##### `exactMatch`<sup>Required</sup> <a name="exactMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.exactMatch"></a>

```typescript
public readonly exactMatch: string[];
```

- *Type:* string[]

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SensitiveDataScannerRuleSuppressions;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleSuppressions">SensitiveDataScannerRuleSuppressions</a>

---


### SensitiveDataScannerRuleTextReplacementOutputReference <a name="SensitiveDataScannerRuleTextReplacementOutputReference" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer"></a>

```typescript
import { sensitiveDataScannerRule } from '@cdktn/provider-datadog'

new sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetNumberOfChars">resetNumberOfChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetReplacementString">resetReplacementString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetShouldSaveMatch">resetShouldSaveMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfChars` <a name="resetNumberOfChars" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetNumberOfChars"></a>

```typescript
public resetNumberOfChars(): void
```

##### `resetReplacementString` <a name="resetReplacementString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetReplacementString"></a>

```typescript
public resetReplacementString(): void
```

##### `resetShouldSaveMatch` <a name="resetShouldSaveMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.resetShouldSaveMatch"></a>

```typescript
public resetShouldSaveMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfCharsInput">numberOfCharsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementStringInput">replacementStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatchInput">shouldSaveMatchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfChars">numberOfChars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementString">replacementString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatch">shouldSaveMatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfCharsInput`<sup>Optional</sup> <a name="numberOfCharsInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfCharsInput"></a>

```typescript
public readonly numberOfCharsInput: number;
```

- *Type:* number

---

##### `replacementStringInput`<sup>Optional</sup> <a name="replacementStringInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementStringInput"></a>

```typescript
public readonly replacementStringInput: string;
```

- *Type:* string

---

##### `shouldSaveMatchInput`<sup>Optional</sup> <a name="shouldSaveMatchInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatchInput"></a>

```typescript
public readonly shouldSaveMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `numberOfChars`<sup>Required</sup> <a name="numberOfChars" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.numberOfChars"></a>

```typescript
public readonly numberOfChars: number;
```

- *Type:* number

---

##### `replacementString`<sup>Required</sup> <a name="replacementString" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.replacementString"></a>

```typescript
public readonly replacementString: string;
```

- *Type:* string

---

##### `shouldSaveMatch`<sup>Required</sup> <a name="shouldSaveMatch" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.shouldSaveMatch"></a>

```typescript
public readonly shouldSaveMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SensitiveDataScannerRuleTextReplacement;
```

- *Type:* <a href="#@cdktn/provider-datadog.sensitiveDataScannerRule.SensitiveDataScannerRuleTextReplacement">SensitiveDataScannerRuleTextReplacement</a>

---



