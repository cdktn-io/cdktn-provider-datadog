# `integrationCloudflareAccount` Submodule <a name="`integrationCloudflareAccount` Submodule" id="@cdktn/provider-datadog.integrationCloudflareAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationCloudflareAccount <a name="IntegrationCloudflareAccount" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account datadog_integration_cloudflare_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiKey(java.lang.String)
    .name(java.lang.String)
//  .email(java.lang.String)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key (or token) for the Cloudflare account. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Cloudflare account. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | The email associated with the Cloudflare account. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

The API key (or token) for the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#api_key IntegrationCloudflareAccount#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#name IntegrationCloudflareAccount#name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.email"></a>

- *Type:* java.lang.String

The email associated with the Cloudflare account.

If an API key is provided (and not a token), this field is also required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#email IntegrationCloudflareAccount#email}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.Initializer.parameter.resources"></a>

- *Type:* java.util.List<java.lang.String>

An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#resources IntegrationCloudflareAccount#resources}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetResources">resetResources</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.resetResources"></a>

```java
public void resetResources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationCloudflareAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isConstruct"></a>

```java
import io.cdktn.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccount;

IntegrationCloudflareAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IntegrationCloudflareAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IntegrationCloudflareAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IntegrationCloudflareAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IntegrationCloudflareAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationCloudflareAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationCloudflareAccountConfig <a name="IntegrationCloudflareAccountConfig" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.integration_cloudflare_account.IntegrationCloudflareAccountConfig;

IntegrationCloudflareAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiKey(java.lang.String)
    .name(java.lang.String)
//  .email(java.lang.String)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | The API key (or token) for the Cloudflare account. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Cloudflare account. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.email">email</a></code> | <code>java.lang.String</code> | The email associated with the Cloudflare account. |
| <code><a href="#@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

The API key (or token) for the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#api_key IntegrationCloudflareAccount#api_key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#name IntegrationCloudflareAccount#name}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The email associated with the Cloudflare account.

If an API key is provided (and not a token), this field is also required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#email IntegrationCloudflareAccount#email}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-datadog.integrationCloudflareAccount.IntegrationCloudflareAccountConfig.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

An allowlist of resources to pull metrics for. Includes `web`, `dns`, `lb` (load balancer), and `worker`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/integration_cloudflare_account#resources IntegrationCloudflareAccount#resources}

---



