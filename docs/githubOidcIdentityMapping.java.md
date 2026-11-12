# `githubOidcIdentityMapping` Submodule <a name="`githubOidcIdentityMapping` Submodule" id="@cdktn/provider-datadog.githubOidcIdentityMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GithubOidcIdentityMapping <a name="GithubOidcIdentityMapping" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping datadog_github_oidc_identity_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMapping;

GithubOidcIdentityMapping.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountIdentifier(java.lang.String)
//  .claimMatchers(GithubOidcIdentityMappingClaimMatchers)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.accountIdentifier">accountIdentifier</a></code> | <code>java.lang.String</code> | The email or handle of the Datadog user or service account that the GitHub workload authenticates as. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.claimMatchers">claimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.accountIdentifier"></a>

- *Type:* java.lang.String

The email or handle of the Datadog user or service account that the GitHub workload authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#account_identifier GithubOidcIdentityMapping#account_identifier}

---

##### `claimMatchers`<sup>Optional</sup> <a name="claimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.Initializer.parameter.claimMatchers"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#claim_matchers GithubOidcIdentityMapping#claim_matchers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers">putClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers">resetClaimMatchers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClaimMatchers` <a name="putClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers"></a>

```java
public void putClaimMatchers(GithubOidcIdentityMappingClaimMatchers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.putClaimMatchers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `resetClaimMatchers` <a name="resetClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.resetClaimMatchers"></a>

```java
public void resetClaimMatchers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMapping;

GithubOidcIdentityMapping.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMapping;

GithubOidcIdentityMapping.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMapping;

GithubOidcIdentityMapping.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMapping;

GithubOidcIdentityMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GithubOidcIdentityMapping.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GithubOidcIdentityMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GithubOidcIdentityMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GithubOidcIdentityMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GithubOidcIdentityMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid">accountUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers">claimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput">accountIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput">claimMatchersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier">accountIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountUuid`<sup>Required</sup> <a name="accountUuid" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountUuid"></a>

```java
public java.lang.String getAccountUuid();
```

- *Type:* java.lang.String

---

##### `claimMatchers`<sup>Required</sup> <a name="claimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchers"></a>

```java
public GithubOidcIdentityMappingClaimMatchersOutputReference getClaimMatchers();
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference">GithubOidcIdentityMappingClaimMatchersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountIdentifierInput`<sup>Optional</sup> <a name="accountIdentifierInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifierInput"></a>

```java
public java.lang.String getAccountIdentifierInput();
```

- *Type:* java.lang.String

---

##### `claimMatchersInput`<sup>Optional</sup> <a name="claimMatchersInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.claimMatchersInput"></a>

```java
public IResolvable|GithubOidcIdentityMappingClaimMatchers getClaimMatchersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.accountIdentifier"></a>

```java
public java.lang.String getAccountIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMapping.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GithubOidcIdentityMappingClaimMatchers <a name="GithubOidcIdentityMappingClaimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.Initializer"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMappingClaimMatchers;

GithubOidcIdentityMappingClaimMatchers.builder()
    .sub(java.lang.String)
//  .actor(java.lang.String)
//  .actorId(java.lang.String)
//  .enterprise(java.lang.String)
//  .enterpriseId(java.lang.String)
//  .environment(java.lang.String)
//  .eventName(java.lang.String)
//  .jobWorkflowRef(java.lang.String)
//  .ref(java.lang.String)
//  .refType(java.lang.String)
//  .repository(java.lang.String)
//  .repositoryId(java.lang.String)
//  .repositoryOwner(java.lang.String)
//  .repositoryOwnerId(java.lang.String)
//  .repositoryVisibility(java.lang.String)
//  .runnerEnvironment(java.lang.String)
//  .workflow(java.lang.String)
//  .workflowRef(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub">sub</a></code> | <code>java.lang.String</code> | Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor">actor</a></code> | <code>java.lang.String</code> | Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId">actorId</a></code> | <code>java.lang.String</code> | Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise">enterprise</a></code> | <code>java.lang.String</code> | Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId">enterpriseId</a></code> | <code>java.lang.String</code> | Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment">environment</a></code> | <code>java.lang.String</code> | Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName">eventName</a></code> | <code>java.lang.String</code> | Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef">jobWorkflowRef</a></code> | <code>java.lang.String</code> | Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref">ref</a></code> | <code>java.lang.String</code> | Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType">refType</a></code> | <code>java.lang.String</code> | Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository">repository</a></code> | <code>java.lang.String</code> | Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner">repositoryOwner</a></code> | <code>java.lang.String</code> | Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId">repositoryOwnerId</a></code> | <code>java.lang.String</code> | Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility">repositoryVisibility</a></code> | <code>java.lang.String</code> | Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment">runnerEnvironment</a></code> | <code>java.lang.String</code> | Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow">workflow</a></code> | <code>java.lang.String</code> | Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef">workflowRef</a></code> | <code>java.lang.String</code> | Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. |

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.sub"></a>

```java
public java.lang.String getSub();
```

- *Type:* java.lang.String

Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token.

It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#sub GithubOidcIdentityMapping#sub}

---

##### `actor`<sup>Optional</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actor"></a>

```java
public java.lang.String getActor();
```

- *Type:* java.lang.String

Regular expression matched against the `actor` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor GithubOidcIdentityMapping#actor}

---

##### `actorId`<sup>Optional</sup> <a name="actorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.actorId"></a>

```java
public java.lang.String getActorId();
```

- *Type:* java.lang.String

Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#actor_id GithubOidcIdentityMapping#actor_id}

---

##### `enterprise`<sup>Optional</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterprise"></a>

```java
public java.lang.String getEnterprise();
```

- *Type:* java.lang.String

Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise GithubOidcIdentityMapping#enterprise}

---

##### `enterpriseId`<sup>Optional</sup> <a name="enterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.enterpriseId"></a>

```java
public java.lang.String getEnterpriseId();
```

- *Type:* java.lang.String

Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#enterprise_id GithubOidcIdentityMapping#enterprise_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Regular expression matched against the `environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#environment GithubOidcIdentityMapping#environment}

---

##### `eventName`<sup>Optional</sup> <a name="eventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.eventName"></a>

```java
public java.lang.String getEventName();
```

- *Type:* java.lang.String

Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#event_name GithubOidcIdentityMapping#event_name}

---

##### `jobWorkflowRef`<sup>Optional</sup> <a name="jobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.jobWorkflowRef"></a>

```java
public java.lang.String getJobWorkflowRef();
```

- *Type:* java.lang.String

Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#job_workflow_ref GithubOidcIdentityMapping#job_workflow_ref}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

Regular expression matched against the `ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref GithubOidcIdentityMapping#ref}

---

##### `refType`<sup>Optional</sup> <a name="refType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.refType"></a>

```java
public java.lang.String getRefType();
```

- *Type:* java.lang.String

Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#ref_type GithubOidcIdentityMapping#ref_type}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Regular expression matched against the `repository` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository GithubOidcIdentityMapping#repository}

---

##### `repositoryId`<sup>Optional</sup> <a name="repositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_id GithubOidcIdentityMapping#repository_id}

---

##### `repositoryOwner`<sup>Optional</sup> <a name="repositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwner"></a>

```java
public java.lang.String getRepositoryOwner();
```

- *Type:* java.lang.String

Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner GithubOidcIdentityMapping#repository_owner}

---

##### `repositoryOwnerId`<sup>Optional</sup> <a name="repositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryOwnerId"></a>

```java
public java.lang.String getRepositoryOwnerId();
```

- *Type:* java.lang.String

Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_owner_id GithubOidcIdentityMapping#repository_owner_id}

---

##### `repositoryVisibility`<sup>Optional</sup> <a name="repositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.repositoryVisibility"></a>

```java
public java.lang.String getRepositoryVisibility();
```

- *Type:* java.lang.String

Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#repository_visibility GithubOidcIdentityMapping#repository_visibility}

---

##### `runnerEnvironment`<sup>Optional</sup> <a name="runnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.runnerEnvironment"></a>

```java
public java.lang.String getRunnerEnvironment();
```

- *Type:* java.lang.String

Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#runner_environment GithubOidcIdentityMapping#runner_environment}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflow"></a>

```java
public java.lang.String getWorkflow();
```

- *Type:* java.lang.String

Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow GithubOidcIdentityMapping#workflow}

---

##### `workflowRef`<sup>Optional</sup> <a name="workflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers.property.workflowRef"></a>

```java
public java.lang.String getWorkflowRef();
```

- *Type:* java.lang.String

Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token.

String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#workflow_ref GithubOidcIdentityMapping#workflow_ref}

---

### GithubOidcIdentityMappingConfig <a name="GithubOidcIdentityMappingConfig" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMappingConfig;

GithubOidcIdentityMappingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountIdentifier(java.lang.String)
//  .claimMatchers(GithubOidcIdentityMappingClaimMatchers)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier">accountIdentifier</a></code> | <code>java.lang.String</code> | The email or handle of the Datadog user or service account that the GitHub workload authenticates as. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers">claimMatchers</a></code> | <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | claim_matchers block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountIdentifier`<sup>Required</sup> <a name="accountIdentifier" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.accountIdentifier"></a>

```java
public java.lang.String getAccountIdentifier();
```

- *Type:* java.lang.String

The email or handle of the Datadog user or service account that the GitHub workload authenticates as.

For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#account_identifier GithubOidcIdentityMapping#account_identifier}

---

##### `claimMatchers`<sup>Optional</sup> <a name="claimMatchers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingConfig.property.claimMatchers"></a>

```java
public GithubOidcIdentityMappingClaimMatchers getClaimMatchers();
```

- *Type:* <a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

claim_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_identity_mapping#claim_matchers GithubOidcIdentityMapping#claim_matchers}

---

## Classes <a name="Classes" id="Classes"></a>

### GithubOidcIdentityMappingClaimMatchersOutputReference <a name="GithubOidcIdentityMappingClaimMatchersOutputReference" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.github_oidc_identity_mapping.GithubOidcIdentityMappingClaimMatchersOutputReference;

new GithubOidcIdentityMappingClaimMatchersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor">resetActor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId">resetActorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise">resetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId">resetEnterpriseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName">resetEventName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef">resetJobWorkflowRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType">resetRefType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId">resetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner">resetRepositoryOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId">resetRepositoryOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility">resetRepositoryVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment">resetRunnerEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow">resetWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef">resetWorkflowRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActor` <a name="resetActor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActor"></a>

```java
public void resetActor()
```

##### `resetActorId` <a name="resetActorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetActorId"></a>

```java
public void resetActorId()
```

##### `resetEnterprise` <a name="resetEnterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterprise"></a>

```java
public void resetEnterprise()
```

##### `resetEnterpriseId` <a name="resetEnterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnterpriseId"></a>

```java
public void resetEnterpriseId()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetEventName` <a name="resetEventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetEventName"></a>

```java
public void resetEventName()
```

##### `resetJobWorkflowRef` <a name="resetJobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetJobWorkflowRef"></a>

```java
public void resetJobWorkflowRef()
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRef"></a>

```java
public void resetRef()
```

##### `resetRefType` <a name="resetRefType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRefType"></a>

```java
public void resetRefType()
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepository"></a>

```java
public void resetRepository()
```

##### `resetRepositoryId` <a name="resetRepositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryId"></a>

```java
public void resetRepositoryId()
```

##### `resetRepositoryOwner` <a name="resetRepositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwner"></a>

```java
public void resetRepositoryOwner()
```

##### `resetRepositoryOwnerId` <a name="resetRepositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryOwnerId"></a>

```java
public void resetRepositoryOwnerId()
```

##### `resetRepositoryVisibility` <a name="resetRepositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRepositoryVisibility"></a>

```java
public void resetRepositoryVisibility()
```

##### `resetRunnerEnvironment` <a name="resetRunnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetRunnerEnvironment"></a>

```java
public void resetRunnerEnvironment()
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflow"></a>

```java
public void resetWorkflow()
```

##### `resetWorkflowRef` <a name="resetWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.resetWorkflowRef"></a>

```java
public void resetWorkflowRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput">actorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput">actorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput">enterpriseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput">enterpriseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput">eventNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput">jobWorkflowRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput">refTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput">repositoryOwnerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput">repositoryOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput">repositoryVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput">runnerEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput">subInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput">workflowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput">workflowRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor">actor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId">actorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise">enterprise</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId">enterpriseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName">eventName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef">jobWorkflowRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType">refType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner">repositoryOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId">repositoryOwnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility">repositoryVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment">runnerEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub">sub</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow">workflow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef">workflowRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actorIdInput`<sup>Optional</sup> <a name="actorIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorIdInput"></a>

```java
public java.lang.String getActorIdInput();
```

- *Type:* java.lang.String

---

##### `actorInput`<sup>Optional</sup> <a name="actorInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorInput"></a>

```java
public java.lang.String getActorInput();
```

- *Type:* java.lang.String

---

##### `enterpriseIdInput`<sup>Optional</sup> <a name="enterpriseIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseIdInput"></a>

```java
public java.lang.String getEnterpriseIdInput();
```

- *Type:* java.lang.String

---

##### `enterpriseInput`<sup>Optional</sup> <a name="enterpriseInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseInput"></a>

```java
public java.lang.String getEnterpriseInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `eventNameInput`<sup>Optional</sup> <a name="eventNameInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventNameInput"></a>

```java
public java.lang.String getEventNameInput();
```

- *Type:* java.lang.String

---

##### `jobWorkflowRefInput`<sup>Optional</sup> <a name="jobWorkflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRefInput"></a>

```java
public java.lang.String getJobWorkflowRefInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `refTypeInput`<sup>Optional</sup> <a name="refTypeInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refTypeInput"></a>

```java
public java.lang.String getRefTypeInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `repositoryOwnerIdInput`<sup>Optional</sup> <a name="repositoryOwnerIdInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerIdInput"></a>

```java
public java.lang.String getRepositoryOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryOwnerInput`<sup>Optional</sup> <a name="repositoryOwnerInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerInput"></a>

```java
public java.lang.String getRepositoryOwnerInput();
```

- *Type:* java.lang.String

---

##### `repositoryVisibilityInput`<sup>Optional</sup> <a name="repositoryVisibilityInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibilityInput"></a>

```java
public java.lang.String getRepositoryVisibilityInput();
```

- *Type:* java.lang.String

---

##### `runnerEnvironmentInput`<sup>Optional</sup> <a name="runnerEnvironmentInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironmentInput"></a>

```java
public java.lang.String getRunnerEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `subInput`<sup>Optional</sup> <a name="subInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.subInput"></a>

```java
public java.lang.String getSubInput();
```

- *Type:* java.lang.String

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowInput"></a>

```java
public java.lang.String getWorkflowInput();
```

- *Type:* java.lang.String

---

##### `workflowRefInput`<sup>Optional</sup> <a name="workflowRefInput" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRefInput"></a>

```java
public java.lang.String getWorkflowRefInput();
```

- *Type:* java.lang.String

---

##### `actor`<sup>Required</sup> <a name="actor" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actor"></a>

```java
public java.lang.String getActor();
```

- *Type:* java.lang.String

---

##### `actorId`<sup>Required</sup> <a name="actorId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.actorId"></a>

```java
public java.lang.String getActorId();
```

- *Type:* java.lang.String

---

##### `enterprise`<sup>Required</sup> <a name="enterprise" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterprise"></a>

```java
public java.lang.String getEnterprise();
```

- *Type:* java.lang.String

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.enterpriseId"></a>

```java
public java.lang.String getEnterpriseId();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.eventName"></a>

```java
public java.lang.String getEventName();
```

- *Type:* java.lang.String

---

##### `jobWorkflowRef`<sup>Required</sup> <a name="jobWorkflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.jobWorkflowRef"></a>

```java
public java.lang.String getJobWorkflowRef();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `refType`<sup>Required</sup> <a name="refType" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.refType"></a>

```java
public java.lang.String getRefType();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `repositoryOwner`<sup>Required</sup> <a name="repositoryOwner" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwner"></a>

```java
public java.lang.String getRepositoryOwner();
```

- *Type:* java.lang.String

---

##### `repositoryOwnerId`<sup>Required</sup> <a name="repositoryOwnerId" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryOwnerId"></a>

```java
public java.lang.String getRepositoryOwnerId();
```

- *Type:* java.lang.String

---

##### `repositoryVisibility`<sup>Required</sup> <a name="repositoryVisibility" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.repositoryVisibility"></a>

```java
public java.lang.String getRepositoryVisibility();
```

- *Type:* java.lang.String

---

##### `runnerEnvironment`<sup>Required</sup> <a name="runnerEnvironment" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.runnerEnvironment"></a>

```java
public java.lang.String getRunnerEnvironment();
```

- *Type:* java.lang.String

---

##### `sub`<sup>Required</sup> <a name="sub" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.sub"></a>

```java
public java.lang.String getSub();
```

- *Type:* java.lang.String

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflow"></a>

```java
public java.lang.String getWorkflow();
```

- *Type:* java.lang.String

---

##### `workflowRef`<sup>Required</sup> <a name="workflowRef" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.workflowRef"></a>

```java
public java.lang.String getWorkflowRef();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchersOutputReference.property.internalValue"></a>

```java
public IResolvable|GithubOidcIdentityMappingClaimMatchers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.githubOidcIdentityMapping.GithubOidcIdentityMappingClaimMatchers">GithubOidcIdentityMappingClaimMatchers</a>

---



